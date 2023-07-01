"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230625194736 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230625194736 extends migrations_1.Migration {
    async up() {
        this.addSql('select 1');
    }
}
exports.Migration20230625194736 = Migration20230625194736;
//# sourceMappingURL=Migration20230625194736.js.map