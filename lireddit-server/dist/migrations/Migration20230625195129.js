"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230625195129 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230625195129 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "create_at" timestamptz(0) not null, "update_at" timestamptz(0) not null, "title" text not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20230625195129 = Migration20230625195129;
//# sourceMappingURL=Migration20230625195129.js.map