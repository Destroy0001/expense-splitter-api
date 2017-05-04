/* jshint indent: 2 */

export default (sequelize, DataTypes) =>{
	return sequelize.define('Group_expenses', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		group_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		added_by: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'group_users',
				key: 'id'
			}
		},
		created: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		deleted: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'group_expenses'
	});
};
