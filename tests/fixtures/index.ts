import { mergeTests } from '@playwright/test';
import { test as chatTest } from './catalog.fixture';

export const test = mergeTests(chatTest);
