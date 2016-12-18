import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import './task.html'

Template.task.events({
  'click .toggle-checked'(e, instance) {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', instance.data._id, !instance.data.checked)
  },
  'click .delete'(e, instance) {
    Meteor.call('tasks.remove', instance.data._id)
  },
})
