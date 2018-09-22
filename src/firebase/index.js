import firebaseConfig from './config'
//
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp(firebaseConfig)

export const AUTH = firebase.auth()
export const DB = firebase.firestore()
export const STORAGE = firebase.storage()
