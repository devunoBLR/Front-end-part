import {getFullInfo} from "../requests";

export async function tempest(id) {
    return await getFullInfo(id);
}