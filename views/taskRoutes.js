const router = require('express').Router()

router.post('/tasks', (request, response) => {
    return response.send("Task created");
});

router.get('/tasks', (request, response) => {
    return response.send("Tasks retrieved successfully")
});

router.put('/tasks/:id', (req, res) => {
    return res.send("Task updated successfully with id: " + req.params.id);
});

router.delete('/tasks/:id', (req, res) => {
    return res.send("Task deleted successfully with id: " + req.params.id)
})

module.exports = router;