import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");


export async function superAuth() {
    const authData = await pb
        .collection("_superusers")
        .authWithPassword("admin@admin.com", "oYvYSs05BrkoOFX");
    return authData;
}

export async function getAllFilmsByProjectionDate() {
    const records = await pb.collection("Film").getFullList({
        sort: "date_projection",
    });
    return records;
}

export async function getAllActivitiesByProjectionDate() {
    const records = await pb.collection("Activite").getFullList({
        sort: "date",
    });
    return records;
}


export async function getAllInvitesSortedByName() {
    await superAuth();
    const records = await pb.collection("Invite").getFullList({ sort: "nom", filter: "role = 'acteur' || role = 'production'" });
    pb.authStore.clear();
    return records;
}

export async function getFilmById(id) {
    const records = await pb.collection("Film").getOne(id);
    return records;
}


export async function getActiviteById(id) {
    const records = await pb.collection("Activite").getOne(id);
    return records;
}

export async function getInvitesById(id) {
    const records = await pb.collection("Invite").getOne(id);
    return records;
}

export async function getActivitiesByAnimatorId(id) {
    const records = await pb.collection("Activite").getFullList({
        filter: `invite.id = '${id}'`,
    });
    return records;
}

export async function getActivitiesByAnimatorNom(nom) {
    const records = await pb.collection("Activite").getFullList({
        filter: `invite.nom = '${nom}'`,
    });
    return records;
}

export async function modifyRecord(collection, id, data) {
    await superAuth();
    const record = await pb.collection(collection).update(id, data);
    return record;
}