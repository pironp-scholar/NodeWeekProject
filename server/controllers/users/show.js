module.exports = Meteor => {
    const User = Meteor.models.User;

    return (params, req, res, next) => {
        find()
          .then(user => res.end(JSON.stringify(user)))
          .catch(error => {
            res.statusCode = 500;
            res.end(error);
          });

        function find(){
          const user = User.findOne(params.id);
          return new Promise((resolve, reject) => user ? resolve(user) : reject('user not found'));
        }
    }
};
