export default function(): unknown {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'deacon',
    synchronize: true,
  };
};