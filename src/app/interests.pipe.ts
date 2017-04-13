import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from './users.service';

@Pipe({
  name: 'interests',
  pure: true
})
export class InterestsPipe implements PipeTransform {
  transform(input: any, profile) {
    var output: any[] = [];
    if (input == undefined || profile == undefined) {
      return input;
    } else {
      for (var i = 0; i < profile[0].interests.length; i++) {
        for (var j = 0; j < input.length; j++) {
          var userLikes = input[j].interests;
          for (var x = 0; x < profile[0].interests.length; x++) {
            if (userLikes[x] === profile[0].interests[i]) {
              if (input[j].username != profile[0].username) {
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
