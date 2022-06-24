/**
 * 3. Iterable groups
 *
 * Make the Group class from the previous exercise iterable.
 * Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
 *
 * If you used an array to represent the group’s members, don’t just return the iterator created by calling the
 * Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
 *
 * It is okay if your iterator behaves strangely when the group is modified during iteration.
 *
 */

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.group.splice(this.group.indexOf(value), 1);
    }
  }

  has(value) {
    for (const member of this.group) {
      if (value === member) {
        return true;
      }
    }

    return false;
  }

  static from(array) {
    const group = new Group();
    for (const value of array) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator] = function () {
    return new GroupIterator(this);
  };
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    // next() returns an object containing two properties: value and done
    if (this.index === this.group.group.length) {
      return { done: true };
    } else {
      const result = {
        value: this.group.group[this.index],
        done: false,
      };

      this.index += 1;

      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
