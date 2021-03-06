const express = require("express"); // Import whole express library
const router = express.Router();  // Create instance of a Router object
const articleController = require("../controllers/articleController");
const noteController = require("../controllers/noteController");

router.get("/scrape", articleController.scrape );
router.get("/articles", articleController.getAll );
router.get("/articles/:id", articleController.getById );

router.post("/articles", articleController.create );
router.put("/articles/:id/save", articleController.save );
router.put("/articles/:id/unsave", articleController.unsave);
router.put("/articles/:id/update_note", articleController.updateNote);

router.put("/articles/:id/delete_note", articleController.updateNote);

router.delete("/articles/:id/delete", articleController.delete );

// router.post("/articles/notes", noteController.create );
// router.put("/articles/notes/:id/save", noteController.save );
// router.put("/articles/notes/:id/unsave", noteController.unsave);
// router.delete("/articles/notes:id/delete", noteController.delete );

// export router to the rest of the project
module.exports = router;
