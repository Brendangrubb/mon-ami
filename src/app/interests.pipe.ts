import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from './users.service';


@Pipe({
  name: 'interests',
  pure: true
})
export class InterestsPipe implements PipeTransform {
  transform(input: any[], profileUser) {
    var output: any[] = [];
    if (profileUser) {
      for (var i = 0; i < profileUser.likes.length; i++) {
        for (var j = 0; j < input.length; j++) {
          var userLikes = input[j].likes;

          for ( var x = 0; x < userLikes.length; x++) {
            if (userLikes[x] === profileUser.likes[i]) {
              if (input[j].username != profileUser.username) {
                output.push(input[j]);
              }
            }
          }

        }
      }
      return output;
    }
  }

}
// console.log(desiredInterest);
// var output: any[] = [];
// var horses: any[] = [];
// if (desiredInterest === "horses") {
//   for (let i=0; i < input.length; i++) {
//     //the second loop iterates over the array of likes each user has
//     for (let j=0; j < input[i].likes.length; j++) {
//       if (input[i].likes[j] === "horses") {
//         output.push(input[i]);
//         horses.push(input[i].$key);
//         console.log(input[i].likes);
//       }
//     }
//   }
//   console.log(horses);
//   return output;
// } else if (desiredInterest === "music") {
//   for ( let i = 0; i < input.length; i++) {
//     for (let j=0; j < input[i].likes.length; j++) {
//       if (input[i].likes[j] === "music") {
//         output.push(input[i]);
//       }
//     }
//   }
//   return output;
// } else {
//   return input;
// }
