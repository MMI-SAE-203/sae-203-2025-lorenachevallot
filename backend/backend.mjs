import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export async function superAuth() {
    const authData = await pb
        .collection("_superusers")
        .authWithPassword("admin@admin.com", "oYvYSs05BrkoOFX");
    return authData;
}

export async function getAllFilmsByProjectionDate() {
    await superAuth();
    const records = await pb.collection("Film").getFullList({
        sort: "date_projection",
    });
    pb.authStore.clear();
    return records;
}

export async function getAllActivitiesByProjectionDate() {
    await superAuth();
    const records = await pb.collection("Activite").getFullList({
        sort: "date",
    });
    pb.authStore.clear();
    return records;
}


export async function getAllInvitesSortedByName() {
    await superAuth();
    const records = await pb.collection("Invite").getFullList({ sort: "nom", filter: "role = 'acteur' || role = 'production'" });
    records.photo = pb.files.getURL(records, records.photo);
    pb.authStore.clear();
    return records;
}

export async function getFilmById(id) {
    await superAuth();
    const record = await pb.collection("Film").getOne(id, { expand: "invite" });
    record.affiche = pb.files.getURL(record, record.affiche);
    record.expand.invite.photo = pb.files.getURL(record.expand.invite, record.expand.invite.photo);
    record.photosupp = pb.files.getURL(record, record.photosupp);
    pb.authStore.clear();
    return record;
}


export async function getActiviteById(id) {
    await superAuth();
    const records = await pb.collection("Activite").getOne(id);
    pb.authStore.clear();
    return records;
}

export async function getInvitesById(id) {
    await superAuth();
    const records = await pb.collection("Invite").getOne(id);
    records.photo = pb.files.getURL(records, records.photo);
    pb.authStore.clear();
    return records;
}

export async function getActivitiesByAnimatorId(id) {
    await superAuth();
    const records = await pb.collection("Activite").getFullList({
        filter: `invite.id = '${id}'`,
    });
    pb.authStore.clear();
    return records;
}

export async function getActivitiesByAnimatorNom(nom) {
    await superAuth();
    const records = await pb.collection("Activite").getFullList({
        filter: `invite.nom = '${nom}'`,
    });
    pb.authStore.clear();
    return records;
}

export async function modifyRecord(collection, id, data) {
    await superAuth();
    const record = await pb.collection(collection).update(id, data);
    pb.authStore.clear();
    return record;
}

export function formatDate(date) {
    const d = new Date(date);

    const dateString = d.toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const timeString = `${d.getHours()}h${d.getMinutes().toString().padStart(2, "0")}`;

    return { date: dateString, heure: timeString };
}

export async function getCollection(collection) {
    await superAuth();
    const records = await pb.collection(collection).getFullList();
    pb.authStore.clear();
    return records;
}