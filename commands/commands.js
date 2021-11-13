module.exports = {
  name: "commands",
  description: "embed for the various commands on the bot",

  execute(message, args, Discord) {
    const commandEmbed = new Discord.MessageEmbed()
      .setColor("#7dbfc7")
      .setTitle("Bot Commands")
      .setURL("https://github.com/allanlzee/DiscordBotRevised")
      .setAuthor("Allan Zhou")
      .setImage(
        "https://miro.medium.com/max/12000/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg"
      )
      .setDescription("The various embeds for Realboobs Bot")
      .addFields(
        { name: "Say Hello to Allan's Bot", value: "%hello" },

        { name: "Add Role to User (Admin/Programmer)", value: "%add_role" },
        {
          name: "Add Role to Others (Admin/Programmer)",
          value: "%add_role_admin",
        },
        { name: "Ban User (Admin)", value: "%ban" },
        { name: "Review Bot's JavaScript Code", value: "%bot_code" },
        { name: "View Bug Reports", value: "%bug_reports" },
        { name: "Report Bug", value: "%bug" },

        { name: "See Class Link", value: "%class" },
        { name: "Delete Messages in Bulk", value: "%clear_chat" },
        { name: "See All Bot Commands", value: "%commands" },
        { name: "Daily Points", value: "%daily" },
        { name: "Play One Song", value: "%join_voice" },
        { name: "Kick User (Admin)", value: "%kick" },
        { name: "Make Bot Leave Voice", value: "%leave_voice" },
        { name: "Pause the Music", value: "%pause" },
        { name: "See Individual Permissions", value: "%permissions" },
        { name: "Play Song from Queue", value: "%queue" },
        { name: "Add Song to Queue", value: "%queue_add" },
        { name: "View the Music Queue", value: "%queue_view" },
        { name: "Remove Roles (Admin/Programmer)", value: "%remove_role" },
        { name: "View Roles", value: "%roles" },
        { name: "View Role Permissions", value: "%role_permissions" },
        { name: "See Schedule for a User", value: "%schedule" },
        { name: "Add to Schedule", value: "%schedule_add" },
        { name: "Create a Schedule", value: "%schedule_create" },
        { name: "Delete Schedule", value: "%schedule_delete" },
        { name: "Remove Activity from Schedule", value: "%schedule_delete" },
        { name: "View Schedule", value: "%schedule_view" },
        { name: "Trivia", value: "%trivia_<category>" },
        { name: "Trivia Help Commands", value: "%trivia_help" },
        { name: "Join Voice Channel", value: "%voice" },
        { name: "Check Voice Permissions", value: "%voice_permissions" }
      )
      .setFooter("Add bug reports using %bug_reports.");

    message.channel.send(commandEmbed);
  },
};
