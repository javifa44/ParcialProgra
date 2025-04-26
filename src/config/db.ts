import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        'src/entity/*/.ts'
    ]
});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log('Error al conectarse a la base de datos', error);
    }
}
