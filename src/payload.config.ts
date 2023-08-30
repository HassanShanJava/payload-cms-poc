import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
  serverURL:process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
