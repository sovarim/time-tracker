// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('db', {
  createUser: (...args: any) => ipcRenderer.invoke('db:create-user', ...args),
  getUsers: () => ipcRenderer.invoke('db:get-users'),
});