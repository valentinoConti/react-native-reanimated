import JSReanimated from './JSReanimated';

const reanimatedJS = new JSReanimated();

global._frameTimestamp = null;

export const _updatePropsJS = (_viewTag, _viewName, updates, viewRef) => {
  if (viewRef?._component) {
    const [rawStyles] = Object.keys(updates).reduce(
      (acc, key) => {
        const value = updates[key];
        const index = typeof value === 'function' ? 1 : 0;
        acc[index][key] = value;
        return acc;
      },
      [{}, {}]
    );

    viewRef._component.setNativeProps({ style: rawStyles });
  }
};

global._setGlobalConsole = (_val) => {
  // noop
};

export default reanimatedJS;
