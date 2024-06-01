import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoModulePoc.web.ts
// and on native platforms to ExpoModulePoc.ts
import ExpoModulePocModule from './ExpoModulePocModule';
import ExpoModulePocView from './ExpoModulePocView';
import { ChangeEventPayload, ExpoModulePocViewProps } from './ExpoModulePoc.types';

// Get the native constant value.
export const PI = ExpoModulePocModule.PI;

export function hello(): string {
  return ExpoModulePocModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoModulePocModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoModulePocModule ?? NativeModulesProxy.ExpoModulePoc);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoModulePocView, ExpoModulePocViewProps, ChangeEventPayload };
