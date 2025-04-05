import { MigrationBuilder } from "node-pg-migrate";

// Changes to make to the database
export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("users", {
    id: "id",

    username: {
      type: "varchar",
      notNull: true,
      unique: true,
    },

    password: {
      type: "varchar",
      notNull: true,
    },

    user_wins: {
      type: "integer",
      default: 0,
    },

    user_losses: {
      type: "integer",
      default: 0,
    },
  });
}

// Changes to remove/rollback from the database
export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("users");
}
