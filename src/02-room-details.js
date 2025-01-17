/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  // 1. have a if statement to check if the name of the dino matches one in the dinosaur array OR if the name given isnt found in the
  // rooms array to. return error message if it doesnt

  const dinoExist = dinosaurs.find(
    (dinosaur) => dinosaur.name === dinosaurName
  );

  if (!dinoExist) {
    return "Dinosaur with name '" + dinosaurName + "' cannot be found.";
  }

  if (dinoExist) {
    const roomExist = rooms.find((room) => {
      return room.dinosaurs.includes(dinoExist.dinosaurId);
    });

    if (roomExist) {
      return roomExist.name;
    }
    return (
      "Dinosaur with name '" + dinosaurName + "' cannot be found in any rooms."
    );
  }
}

//if the name of the dinosaur given is found on the dinosaur list OR in one of the rooms, return the name of the room from the room array
// we want to loop through the rooms array and if the id found at the dinosaur object matches the id "sort

//
/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
  let foundNewRooms = [];
  const connectedRoom = rooms.find((room) => id === room.roomId);

  if (!connectedRoom) {
    return "Room with ID of '" + id + "' could not be found.";
  }

  for (let item of connectedRoom.connectsTo) {
      const listItem = rooms.find((room) => item === room.roomId);
      if (listItem) {
        foundNewRooms.push(listItem.name);
      } else return "Room with ID of 'incorrect-id' could not be found."
    } return foundNewRooms;
  } 


module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
