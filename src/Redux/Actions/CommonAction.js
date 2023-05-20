// --------------- TYPES ---------------
import { GetNetwork } from '../Types';

// --------------- ACTIONS ---------------
export const getNetwork = {
    Request: (isConnected) => ({
        type: GetNetwork.REQUEST,
        payload: isConnected,
    }),
};
