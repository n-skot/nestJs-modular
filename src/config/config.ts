import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    DATABASE: {
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_PORT: process.env.DATABASE_PORT,
    },
    API_KEY: process.env.API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: process.env.MAILER_PORT,
    MAILER_USER: process.env.MAILER_USER,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
    MAILER_FROM_EMAIL: process.env.MAILER_FROM_EMAIL,
    MAILER_FROM_NAME: process.env.MAILER_FROM_NAME,
    MAILER_REPLY_TO_EMAIL: process.env.MAILER_REPLY_TO_EMAIL,
}));