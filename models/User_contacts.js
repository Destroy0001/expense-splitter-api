/* jshint indent: 2 */

export default (sequelize, DataTypes) =>{
	return sequelize.define('User_contacts', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		contact_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		contact_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
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
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		removed: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'user_contacts'
	});
};
