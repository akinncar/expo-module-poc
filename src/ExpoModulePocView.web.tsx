import * as React from 'react';

import { ExpoModulePocViewProps } from './ExpoModulePoc.types';

export default function ExpoModulePocView(props: ExpoModulePocViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
