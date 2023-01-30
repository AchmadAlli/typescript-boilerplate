import { Sequelize } from "sequelize";
import env from "../../config/env";
import logger from "../logger/winston";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: env.sqlite, 
    logging: (sql) => {
        logger.debug(sql);
    }
  });

sequelize.authenticate().then(() => {
    logger.info("connection established");
}).catch(() => {
    logger.error("connection refused");
});

export default sequelize;