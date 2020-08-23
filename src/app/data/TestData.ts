import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData{
  static categories: Category[] = [
    {id: 1, title: 'Job'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Rest'},
    {id: 4, title: 'Sport'},
    {id: 5, title: 'Education'},
    {id: 6, title: 'Health'},
    {id: 7, title: 'Cars'},
    {id: 8, title: 'Finances'},
    {id: 9, title: 'Food'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'low', color: '#e5e5e5'},
    {id: 2, title: 'medium', color: '#85D182'},
    {id: 3, title: 'high', color: '#f1828D'},
    {id: 4, title: 'too urgent', color: '#f1128D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'buy benzine',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
      date: new Date('2020-08-04')
    },

    {
      id: 2,
      title: 'do breakfast',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-08-25')
    },

    {
      id: 3,
      title: 'play football',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
      date: new Date('2020-11-04')
    },

    {
      id: 4,
      title: 'watch film',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-12-06')
    },

    {
      id: 7,
      title: 'get salary',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-09-30')
    },

    {
      id: 8,
      title: 'go to beach',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2021-06-04')
    },

    {
      id: 9,
      title: 'eat much fruits',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-01-04')
    },

    {
      id: 10,
      title: 'chnage dollar to AMD',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-10-10')
    }
  ];
}
