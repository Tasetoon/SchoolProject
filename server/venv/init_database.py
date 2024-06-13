import psycopg2
def init_database():
    connection = psycopg2.connect(
        dbname='postgres',
        user='postgres',
        password='admin',
        host='localhost',
        port='5432'
    )
    connection.autocommit = True
    cursor = connection.cursor()
    cursor.execute('DROP TABLE IF EXISTS BodyDensityConstants;')


    
    cursor.execute('''
        CREATE TABLE BodyDensityConstants (
        id SERIAL PRIMARY KEY,
        name TEXT,
        value INTEGER
        );
        ''')
    cursor.close()

    values = [
        (1,'Платина', 21500), 
        (2,'Золото', 19300),
        (3,'Свинец', 11300),
        (4,'Серебро', 10500),
        (5,'Медь', 8900),
        (6,'Сталь,железо', 7800),
        (7,'Алюминий', 2700),
        (8,'Кирпич', 1800),
        (9,'Лед', 900),
    ]

    cursor = connection.cursor()
    args = ','.join(cursor.mogrify("(%s,%s,%s)", i).decode('utf-8') for i in values)
    
    cursor.execute("INSERT INTO BodyDensityConstants VALUES " + (args))

    cursor.close()
#-------------------------------------------------------------------------------------------------------------
    cursor = connection.cursor()
    cursor.execute('DROP TABLE IF EXISTS LiquidDensityConstants;')


    
    cursor.execute('''
        CREATE TABLE LiquidDensityConstants (
        id SERIAL PRIMARY KEY,
        name TEXT,
        value INTEGER
        );
        ''')
    cursor.close()

    values = [
        (1,'вода', 1000),
        (2,'бензин', 1600),
        (3,'эфир', 1800),
        (4,'серная кислота', 1800),
        (5,'нефть', 2300),
        (6,'ацетон', 2300),
        (7,'спирт', 2500),
        (8,'керосин', 2700),
        (9,'ртуть', 13600),         
    ]

    cursor = connection.cursor()
    args = ','.join(cursor.mogrify("(%s,%s,%s)", i).decode('utf-8') for i in values)
    
    cursor.execute("INSERT INTO LiquidDensityConstants VALUES " + (args))

    cursor.close()

    return connection
