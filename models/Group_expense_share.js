/* jshint indent: 2 */

export default (sequelize, DataTypes) =>{
	return sequelize.define('Group_expense_share', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		expense_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'group_expenses',
				key: 'id'
			}
		},
		user: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'group_users',
				key: 'id'
			}
		},
		share: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		paid: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
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
		tableName: 'group_expense_share'
	});
};
