import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoModulePocViewProps } from './ExpoModulePoc.types';

const NativeView: React.ComponentType<ExpoModulePocViewProps> =
  requireNativeViewManager('ExpoModulePoc');

export default function ExpoModulePocView(props: ExpoModulePocViewProps) {
  return <NativeView {...props} />;
}
