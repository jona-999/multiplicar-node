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

function requestHandler(req, res) {
    user.findById(req.userId)
        .then(function(user) {
            res.send(user)
        })
        .catch(function(err) {
            res.send(err);
        })
}