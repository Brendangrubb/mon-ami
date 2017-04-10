import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from './users.service';


@Pipe({
  name: 'interests',
  pure: true
})
export class InterestsPipe implements PipeTransform {
  transform(input: any[], desiredInterest) {
    var output: any[] = [];
    if (desiredInterest === "horses") {
      for (let i=0; i < input.length; i++) {
        //the second loop iterates over the array of likes each user has
        for (let j=0; j < input[i].likes.length; j++) {
          if (input[i].likes[j] === "horses") {
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredInterest === "music") {
      for ( let i = 0; i < input.length; i++) {
        for (let j=0; j < input[i].likes.length; j++) {
          if (input[i].likes[j] === "music") {
            output.push(input[i]);
          }
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
