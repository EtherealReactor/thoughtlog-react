import * as actionTypes from './AttachmentActionTypes.js';

let initialState = { records: {}, messages: [] }

const attachmentReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_ATTACHMENT_INIT:
      let payload = { status: 'syncing', data: {}, errors: [] }
      return {
        records: { ...state.records, [action.name]: payload },
        messages: [...state.messages, { message: action.type, date: new Date() }]
      }
    case actionTypes.NEW_ATTACHMENT_SUCCESS:
      console.log('attachments', action.data);
      let updatedPayload = { status: 'success', data: action.data, errors: [] } 
      // let currentAttachment = state.records.map((record) => {
      //                           console.log(action.name);
      //                           if(Object.keys(record[action.name]).length !== 0) {
      //                             console.log('matched with name', record);
      //                             // let status = 'success';
      //                             // let data 
      //                           }
      //                           // console.log('not matched', record);
      //                           // return record
      //                         })
      // console.log('currentAttachment', currentAttachment);
      // let attachment = {};
      // attachment[action.name] = { status: 'syncing', data: {}, errors: [] }
      // console.log('attachment in reducer', attachment);
      let records = {...state.records, [action.name]: updatedPayload}
      return {
        ...state,
        records: records
      }
    case actionTypes.NEW_ATTACHMENT_FAILED:
      return {
        ...state,
        messages: [...state.messages, { message: action.type, date: new Date() }],
        errors: [...state.errors, action.errors]
      }
    default:
      return state;
  }
};

export default attachmentReducer;