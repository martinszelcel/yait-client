import React, {useEffect, useState} from 'react';
import Modal from '../elements/Modal';
import axios from 'axios';

const MyDevicesModal = ({open, onClose, accessToken}) => {

    const [devices, setDevices] = useState(() => {
      axios.defaults.headers.common = {'Authorization': `Bearer ${accessToken}`}

      axios.get('/api/devices').then(response => {
        setDevices(response.data);
      });
    });

    return (
        <Modal open={open}>
          <div className="bg-white text-gray-800 px-4 pt-5 pb-4">
            <div className="mt-3 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                My devices
              </h3>
              <div className="mt-5">
                  <table className="table-auto border-collapse border border-green-800">
                    <thead>
                      <tr>
                        <th className="border border-green-600 p-4">User agent</th>
                        <th className="border border-green-600 p-4">IP</th>
                        <th className="border border-green-600 p-4">Last used</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devices ? devices.map(device => (
                          <tr>
                            <td className="border border-green-600 p-4">{device.userAgent}</td>
                            <td className="border border-green-600 p-4">{device.ip}</td>
                            <td className="border border-green-600 p-4">{device.lastUsed}</td>
                          </tr>
                        )
                      ) : null}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
            <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </Modal>
    );
}

export default MyDevicesModal;