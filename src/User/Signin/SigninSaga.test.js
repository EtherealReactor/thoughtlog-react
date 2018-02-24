import {takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
// import localstorage from 'jest-localstorage-mock';
import { signin, signinWorker } from './SigninSaga';
import * as actions from './SigninActions';

describe("SigninSagas", () => {

  it("should authenticate a user and redirect to /thoughts on success", () => {
    let resolve = jest.fn();
    let reject = jest.fn();
    let res = {data: {token: 'some_token'}};
    let token = res.data.token
    let action = { params: {email: 'some_email', password: 'hashed_pwd', resolve, reject}};
    let generator = signinWorker(action);
    expect(generator.next().value).toEqual(call(signin, {email: 'some_email', password: 'hashed_pwd'}));
    expect(generator.next(res).value).toEqual(put(actions.signinSuccess(token)));
    expect(generator.next(token).value).toEqual(put(push('/thoughts')));
    expect(localStorage.__STORE__['token']).toEqual(JSON.stringify(token));
  });

  it("should reject a new SubmissionError on signin fail", () => {
    let error = {response: {data: {password: 'invalid password'}}};
    let resolve = jest.fn();
    let reject = jest.fn();
    let action = { params: {email: 'some_email', password: 'hashed_pwd', resolve, reject}};
    let generator = signinWorker(action);
    expect(generator.next().value).toEqual(call(signin, {email: 'some_email', password: 'hashed_pwd'}));
    expect(generator.throw(error).value).toEqual(put(actions.signinFailed(error.response.data)));
    expect(generator.next().value).toEqual(call(reject, new SubmissionError(error.response.data)))
  });
});