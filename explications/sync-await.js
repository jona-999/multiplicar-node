function requestHandler(req, res) {
    User.findById(resq.userId, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            Task.findById(user.taskId, function(err, Task) {
                if (err) {
                    res.send(err);
                } else {
                    Task.completed = true;
                    Task.save(function(err) {
                        if (err) {
                            res.send('task completed');
                        }
                    })
                }
            })
        }
    })
}


async function requestHandler(req, res) {
    try {

        const user = await user.findById(req.userId);
        const task = await task.findById(user.taskId);
        task.completed = true;
        await task.save();
        res.send('task completed');

    } catch (e) {
        res.send(e);
    }

}