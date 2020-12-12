# practice React Testing Library

Practice [React Testing Library \| Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## environment

- create-react-app typescript
- eslint (standard version)
- prettier

## script

```
# install package
yarn install

# start project
yarn start

# start test
yarn test

# lint+fix
yarn lint:fix
```

## table of contents

1. Rendering test
    - component: [react\-testing\-library/Render\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/Render.tsx)
    - test: [react\-testing\-library/Render\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/Render.test.tsx)
2. UserEvent test (use props)
    - component: [react\-testing\-library/RenderInput\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/RenderInput.test.tsx)
    - test: [react\-testing\-library/RenderInput\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/RenderInput.test.tsx)
3. List component test (use props)
    - component: [react\-testing\-library/FrameworkList\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/FrameworkList.tsx)
    - test: [react\-testing\-library/FrameworkList\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/FrameworkList.test.tsx)
4. Use effect test (use axios)
    - component: [react\-testing\-library/UseEffectRender\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/UseEffectRender.tsx)
    - test: [react\-testing\-library/UseEffectRender\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/UseEffectRender.test.tsx)
5. Reducer test
    - slice: [react\-testing\-library/customCounterSlice\.ts](https://github.com/36t/react-testing-library/blob/master/src/features/customCounter/customCounterSlice.ts)
    - store: [react\-testing\-library/store\.ts](https://github.com/36t/react-testing-library/blob/master/src/app/store.ts)
    - test: [react\-testing\-library/Reducer\.test\.ts](https://github.com/36t/react-testing-library/blob/master/src/features/customCounter/Reducer.test.ts)
6. Extra reducer test
    - slice: [react\-testing\-library/customCounterSlice\.ts](https://github.com/36t/react-testing-library/blob/master/src/features/customCounter/customCounterSlice.ts)
    - store: [react\-testing\-library/store\.ts](https://github.com/36t/react-testing-library/blob/master/src/app/store.ts)
    - test: [react\-testing\-library/ExtraReducer\.test\.ts](https://github.com/36t/react-testing-library/blob/master/src/features/customCounter/ExtraReducer.test.ts)
7. Integration test (not use async)
    - component: [react\-testing\-library/Redux\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/Redux.tsx)
    - test: [react\-testing\-library/Redux\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/Redux.test.tsx)
8. Integration test (use async)
    - component: [react\-testing\-library/ReduxAsync\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/ReduxAsync.tsx)
    - test: [react\-testing\-library/ReduxAsync\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/ReduxAsync.test.tsx)
9. Integration test (use async + axios)
    - component: [react\-testing\-library/ReduxAsync\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/ReduxAsync.tsx)
    - test: [react\-testing\-library/ReduxAsyncAPI\.test\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/ReduxAsyncAPI.test.tsx)
10. Custom hook test
     - custom hook: [react\-testing\-library/useCounter\.ts](https://github.com/36t/react-testing-library/blob/master/src/hooks/useCounter.ts)
     - component: [react\-testing\-library/CustomHooks\.tsx](https://github.com/36t/react-testing-library/blob/master/src/component/CustomHooks.tsx)
     - test: [react\-testing\-library/useCounter\.test\.ts](https://github.com/36t/react-testing-library/blob/master/src/hooks/useCounter.test.ts)
