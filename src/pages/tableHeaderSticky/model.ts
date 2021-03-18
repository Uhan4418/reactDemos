// import { getMarketNumberManageField } from '@/pages/system/MarketNumberManage/service';

// const Model = {
//   namespace: 'marketNumberManage',
//   state: {
//     current: [],
//     filed: [],
//   },
//   effects: {
//     *fetch(_, { call, put }) {
//       const response = yield call(getMarketNumberManageField);
//       yield put({
//         type: 'save',
//         payload: response,
//       });
//     },
//     *getFiled(_, { call, put }) {
//       const response = yield call(getMarketNumberManageField);
//       yield put({
//         type: 'saveFiled',
//         payload: response,
//       });
//     },
//   },
//   reducers: {
//     save(state, action) {
//       return { ...state, current: action.payload.data };
//     },
//     saveFiled(state, action) {
//       return { ...state, filed: action.payload.data };
//     },
//   },
// };
// export default Model;