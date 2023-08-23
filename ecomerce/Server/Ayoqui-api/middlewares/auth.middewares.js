const { verifyToken } = require("../utils/jwt.tools");
const debug = require("debug")("app:auth-middleware");
const User = require("../models/User.model");

const ROLES = require("./../data/roles.constants.json");

const middlewares = {};
const tokenPrefix = "Bearer"

middlewares.authentication = async (req, res, next) => {
  try {
    // Verificar que authorization exista
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Verificar que sea un token valido

    const [prefix, token] = authorization.split(" ");

    if (prefix !== tokenPrefix) {
      return res.status(401).json({ error: "No autorizado" });
    }

    if (!token) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const tokenObject = verifyToken(token);

    if (!tokenObject) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const { userId } = tokenObject;
    debug(userId);

    // Obtener al usuario
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Token registrado
    const isTokenValid = user.tokens.includes(token);
    if (!isTokenValid) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Modificar la req para tener la info del usuario
    req.user = user;
    req.token = token;

    //Pasar al siguiente middleware
    next();
  } catch (error) {
    debug({ error })
    return res.status(500).json({ error: "Error inesperado de servidor" });
  }
}

middlewares.authorization = (roleRequired = ROLES.SYSADMIN) => {
  return (req, res, next) => {
    try {
      // Asumir que se ejecuta después del proceso de autenticacion
      const { roles = [] } = req.user;

      // Verificar si el rol existe en el arreglo
      const roleIndex =
        roles.findIndex(role => (role === roleRequired || role === ROLES.SYSADMIN));

      // Realizar el filtro de rol
      if (roleIndex < 0) {
        return res.status(403).json({ error: "No tienes permiso" });
      }

      // Pasar al siguiente middleware
      next();
    } catch (error) {
      debug({ error });
      return res.status(500).json({ error: "Error inesperado de servidor" });
    }
  }
}

module.exports = middlewares;