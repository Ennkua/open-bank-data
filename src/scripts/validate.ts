import fs from 'fs';
import path from 'path';
import process from 'process';
import { validateBanks } from '../validation/validation';
import { z } from 'zod';

const filePath = path.resolve(__dirname, '../data/banks.json');

try {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  validateBanks(data);
  console.log('Validation successful!');
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(
      'Validation failed:',
      error.errors ? error.errors : error.message,
    );
  } else {
    console.error('Validation failed:', error);
  }
  process.exit(1);
}
