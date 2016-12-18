import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import './task.html'

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId()
  },
})

Template.task.events({
  'click .toggle-checked'(e, instance) {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', instance.data._id, !instance.data.checked)
  },
  'click .delete'(e, instance) {
    Meteor.call('tasks.remove', instance.data._id)
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private)
  },
})
