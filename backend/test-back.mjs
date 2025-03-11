import { getAllFilmsByProjectionDate, superAuth, getAllActivitiesByProjectionDate, getAllInvitesSortedByName, getFilmById, getActiviteById, getInvitesById, getActivitiesByAnimatorId, getActivitiesByAnimatorNom, modifyRecord } from "./backend.mjs";


console.log("====================================");
try {
    await superAuth();
    const films = await getAllFilmsByProjectionDate();
    console.log("films", films);
}
catch (error) {
    console.error("error", error);
}

console.log("==========================================");


try {
    await superAuth();
    const records = await getAllFilmsByProjectionDate();
    console.log("films", records);
}
catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getAllActivitiesByProjectionDate();
    console.log("activities", records);
} catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getAllInvitesSortedByName();
    console.log("Invite", records);
} catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getFilmById("g7o2fyw1fxeb38o");
    console.log("film by id", records);
}
catch (error) {
    console.error("error", error);
}


console.log("==========================================");

try {
    await superAuth();
    const records = await getActiviteById("2b6mtoyl358a6h2");
    console.log("activite by id", records);
}
catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getInvitesById("j92812p427hekro");
    console.log("Invite by id", records);
} catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getActivitiesByAnimatorId("pd4c88635r27ic1");
    console.log("activities by animator id", records);
} catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const records = await getActivitiesByAnimatorNom("Masson");
    console.log("activities by animator nom", records);
} catch (error) {
    console.error("error", error);
}

console.log("==========================================");

try {
    await superAuth();
    const data = {
        titre: "Sirocco",
        duree: 98,
    };
    const records = await modifyRecord("Film", "g7o2fyw1fxeb38o", data);
    console.log("Modified record", records);
} catch (error) {
    console.error("error", error);
}