import PocketBase from "pocketbase";
const pb = new PocketBase("https://pb-sae-203.lorena-chevallot.fr:443")
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
    let records = await pb.collection("Activite").getFullList({
        expand: "invite",
    });
    records = records.filter((record) => record.expand.invite.nom === nom);
    pb.authStore.clear();
    return records;
}

export async function getAnimatorInvited() {
    await superAuth();
    let records = await pb.collection("Invite").getFullList({
        filter: `role = 'animateur'`,
    });
    records = records.map(record => {
        record.photo = pb.files.getURL(record, record.photo);
        return record;
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

export async function getFilteredCollectionItems(collectionName, filtre, valeurFiltre) {
    await superAuth();
    const records = await pb.collection(collectionName).getFullList({
        filter: `${filtre} = '${valeurFiltre}'`,
    });
    pb.authStore.clear();
    return records;
}

export async function getFilmByGenre(genre) {
    await superAuth();
    let records = await pb.collection("Film").getFullList();
    records = records.filter((record) => record.genre[0] === genre || record.genre[1] === genre || record.genre[2] === genre);
    pb.authStore.clear();
    return records;
}

export async function getFilmByInvite(id) {
    await superAuth();
    let records = await pb.collection("Film").getFullList({
        expand: "invite",
        filter: `invite.id = '${id}'`,
    });
    records = records.map(record => {
        record.affiche = pb.files.getURL(record, record.affiche);
        return record;
    });
    pb.authStore.clear();
    return records;
}