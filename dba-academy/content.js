const SUPABASE_URL='https://ilskeyawxpzbahjppllq.supabase.co';
const SUPABASE_KEY='sb_publishable_8HcMuyf-8HPeitFE6Or4QA_Tcnp9Xrf';

const SPRINT={
  start:'2026-09-20',
  exam:'2026-09-27',
  target:85,
  days:[
    {day:1,title:'Hard baseline',task:'20 hard mixed questions. Expose false confidence and service-selection gaps.',target:20},
    {day:2,title:'Core + relational',task:'Transactions, normalization, SQL objects, Azure SQL service selection.',target:15},
    {day:3,title:'Nonrelational',task:'Blob, Files, Table Storage, Cosmos DB and API selection.',target:15},
    {day:4,title:'Analytics',task:'Batch vs streaming, Fabric, Databricks, Real-Time Intelligence, Power BI.',target:15},
    {day:5,title:'Weak-area assault',task:'Adaptive mixed set weighted toward objectives you have missed.',target:15},
    {day:6,title:'Timed mock',task:'40 hard questions in 45 minutes. No feedback until the end.',target:40},
    {day:7,title:'Final review',task:'Missed-objective retest, traps, terminology, and a final readiness set.',target:20}
  ]
};

const DOMAINS=[
  {id:'core',name:'Core data concepts',range:'25–30%',weight:27.5},
  {id:'relational',name:'Relational data on Azure',range:'20–25%',weight:22.5},
  {id:'nonrel',name:'Non-relational data on Azure',range:'15–20%',weight:17.5},
  {id:'analytics',name:'Analytics workloads on Azure',range:'25–30%',weight:27.5}
];

const Q=[];
const add=(id,domain,objective,prompt,options,answer,explanation,contrast)=>Q.push({id,domain,objective,prompt,options,answer,explanation,contrast,difficulty:'hard'});

// CORE DATA CONCEPTS — scenario-first, no definition giveaways.
add('c01','core','Data types','A manufacturer stores a product catalog where every item has an ID and price, but optional attributes such as voltage, fabric, or screen size vary by product. Which description best fits the attribute portion of this data?',
['Strictly structured only','Semi-structured','Unstructured binary data','Time-series data only'],1,
'Semi-structured data can carry a predictable envelope while allowing records to contain different attributes. JSON documents are a common example.',
'A relational table can store optional columns, but the scenario emphasizes variable attributes across records rather than a fixed tabular shape.');
add('c02','core','Transactional vs analytical','A checkout system must reserve inventory, create an order, charge a payment, and roll back the work if one required step fails. Which workload characteristic matters most?',
['High-throughput analytical scans','Transactional consistency','Schema-on-read only','Eventual report refresh'],1,
'The operations form a business transaction: related changes should succeed or fail together so the operational state stays consistent.',
'Analytical systems optimize large reads and aggregation; they are not the defining requirement in this checkout transaction.');
add('c03','core','Transactional vs analytical','An executive dashboard scans five years of sales to compare quarterly trends by region, product family, and channel. What workload is this primarily?',
['OLTP','OLAP','Key-value session storage','File sharing'],1,
'The workload reads large historical datasets and performs aggregations across dimensions, which is analytical/OLAP behavior.',
'OLTP is optimized for many short operational transactions rather than broad historical scans.');
add('c04','core','Batch vs streaming','A utility company wants an alert within seconds when a transformer temperature crosses a safety threshold. Which processing model best fits?',
['Monthly batch processing','Streaming processing','Manual spreadsheet refresh','Nightly full backup'],1,
'Stream processing handles continuously arriving events with low latency, which is required for near-immediate alerts.',
'Batch processing is appropriate when latency can be minutes or hours; it cannot meet a seconds-level alert requirement by definition.');
add('c05','core','Batch vs streaming','A retailer receives store files all day but only needs a reconciled enterprise sales report at 6:00 AM. Which design is the simplest fit?',
['Batch processing overnight','Streaming every transaction into a live dashboard','A transactional lock on every source system','A graph database because stores are related'],0,
'Because the business requirement is a daily reconciled output, an overnight batch is sufficient and simpler than continuous processing.',
'Streaming would add operational complexity without satisfying a requirement that batch cannot already meet.');
add('c06','core','Data roles','A team member builds ingestion pipelines, transforms source data, handles schema drift, and makes curated datasets available to downstream analytics. Which role most directly owns this work?',
['Database administrator','Data engineer','Data analyst','Business stakeholder'],1,
'Data engineers design and operate data movement and transformation pipelines and prepare data for downstream use.',
'A DBA centers on database platform reliability, security, performance, and recovery; an analyst consumes prepared data to answer business questions.');
add('c07','core','Data roles','A production database is suffering blocking, failed backups, and permission sprawl. Which role is most directly accountable for correcting those platform problems?',
['Data analyst','Database administrator','Visualization designer only','Data engineer only'],1,
'A DBA is responsible for operational database administration such as security, availability, backup/recovery, and performance.',
'Data engineers may interact with the database, but the scenario is platform administration rather than pipeline engineering.');
add('c08','core','Data roles','A finance team asks someone to build a model and interactive visual that explains why gross margin changed by region. Which role most directly fits?',
['Data analyst','Database administrator','Storage administrator only','Network engineer'],0,
'Data analysts model and visualize data to answer business questions and communicate findings.',
'DBAs enable reliable access to data but do not normally own the business analysis and visualization outcome.');
add('c09','core','Relational concepts','An Orders table repeats CustomerName and CustomerAddress on every order. Customers frequently change address. What is the clearest design risk?',
['Update anomalies caused by duplicated customer facts','Too few duplicate values for compression','Lack of an unstructured blob column','The table is automatically a star schema'],0,
'Repeating customer attributes across many order rows creates duplication and update anomalies. Separating Customer from Order reduces that risk.',
'The issue is not that duplication is always forbidden; it is that mutable customer facts are redundantly stored across transactional rows.');
add('c10','core','Relational concepts','A row in OrderItems must reference an existing order. Which relational mechanism most directly enforces that relationship?',
['Foreign key','View','Stored procedure name','Nonclustered index alone'],0,
'A foreign key enforces referential integrity between the child value and a key in the parent table.',
'An index can improve lookup performance but does not by itself enforce that the referenced parent row exists.');
add('c11','core','SQL statement types','A deployment adds a new nullable column to an existing table. Which category best describes the SQL operation?',
['Data definition (DDL)','Data manipulation (DML)','Analytical visualization','Streaming ingestion'],0,
'ALTER TABLE changes the definition of a database object, so it is DDL.',
'DML changes row data through statements such as INSERT, UPDATE, and DELETE; it does not redefine the table structure.');
add('c12','core','File formats','A lake stores very large analytical datasets and needs a columnar file format that supports efficient scans of selected columns. Which format is the strongest fit?',
['Plain TXT','Parquet','BMP','XML solely because it has tags'],1,
'Parquet is columnar and well suited to analytical workloads that scan a subset of columns over large datasets.',
'CSV is broadly compatible but row-oriented and lacks Parquet’s columnar storage advantages for analytical scans.');
add('c13','core','ETL and ELT','A cloud analytics platform has scalable compute. Raw data is loaded first, and transformations are performed inside the destination platform. Which pattern is this?',
['ETL','ELT','OLTP','CRUD'],1,
'ELT loads data before transforming it, using the destination platform’s compute for transformation.',
'ETL transforms before loading into the destination. The order of the T and L is the key distinction.');
add('c14','core','Data consistency','Two users update related financial records concurrently. The system must prevent a transaction from seeing another transaction’s incomplete intermediate state. Which ACID property is most relevant?',
['Isolation','Durability','Compression','Partitioning'],0,
'Isolation controls how concurrent transactions observe one another and protects against exposure to incomplete intermediate work.',
'Durability concerns committed changes surviving failures; it does not govern concurrent visibility while transactions are in progress.');

// RELATIONAL DATA ON AZURE
add('r01','relational','Azure SQL service selection','A company uses SQL Server Agent jobs, cross-database queries, and other instance-scoped SQL Server features. It wants a managed Azure service with minimal application changes. What should it evaluate first?',
['Azure SQL Database','Azure SQL Managed Instance','Azure Table Storage','Azure Cosmos DB for NoSQL'],1,
'Azure SQL Managed Instance provides managed PaaS operation while preserving broad SQL Server instance compatibility.',
'Azure SQL Database is highly managed but intentionally does not reproduce every instance-level SQL Server feature.');
add('r02','relational','Azure SQL service selection','A SaaS team is building a new application database and wants Microsoft to manage the database engine, patching, backups, and high availability. It does not need OS access or instance-level compatibility. Best fit?',
['SQL Server on Azure Virtual Machines','Azure SQL Database','Azure Files','Azure Cosmos DB for Apache Gremlin'],1,
'Azure SQL Database is a PaaS relational database designed for cloud applications that do not need server/OS control.',
'A SQL Server VM gives maximum compatibility and control but also leaves more infrastructure administration with the customer.');
add('r03','relational','Azure SQL service selection','A vendor application requires a specific SQL Server build, Windows-level agents, custom software installed beside SQL Server, and direct OS access. Which hosting choice best fits?',
['Azure SQL Database','Azure SQL Managed Instance','SQL Server on an Azure VM','Azure Database for PostgreSQL'],2,
'SQL Server on an Azure VM is IaaS and provides OS and SQL Server instance control needed by software with host-level dependencies.',
'Managed Instance improves SQL compatibility but does not give unrestricted operating-system access.');
add('r04','relational','PaaS vs IaaS','A team chooses SQL Server on Azure Virtual Machines instead of Azure SQL Database. Which responsibility most clearly shifts back toward the customer?',
['Managing more of the operating system and SQL Server environment','Designing every Azure datacenter','Replacing SQL with JSON','Eliminating backups entirely'],0,
'IaaS provides more control, which also means more responsibility for the guest OS and SQL Server configuration/maintenance.',
'Azure still manages the physical infrastructure; the tradeoff is customer control and responsibility higher in the stack.');
add('r05','relational','Open-source database services','An application is written for PostgreSQL and the team wants a managed Azure relational service rather than operating PostgreSQL on a VM. Which service family fits?',
['Azure Database for PostgreSQL','Azure Table Storage','Azure Files','Azure Cosmos DB for Apache Gremlin'],0,
'Azure Database for PostgreSQL provides managed PostgreSQL capabilities in Azure.',
'Cosmos DB is non-relational even when an API offers compatibility with another ecosystem.');
add('r06','relational','Relational objects','Analysts repeatedly need the same joined and filtered representation of several tables, while the underlying data should remain stored in those base tables. Which object is the natural choice?',
['View','Primary key','Transaction log backup','Blob container'],0,
'A view stores a query definition and presents a reusable relational projection without duplicating the base table data by default.',
'An index changes access paths and performance characteristics; it does not primarily provide a named reusable relational projection.');
add('r07','relational','Relational objects','A query frequently filters Customers by Email. The table has millions of rows, and Email values are selective. Which database object would you consider to improve lookup performance?',
['Index','Foreign key only','View only','Backup file'],0,
'An appropriate index can provide an efficient access path for selective predicates.',
'A view can package a query but does not automatically create the physical access path needed for a faster lookup.');
add('r08','relational','Normalization','A transactional design has Customers(CustomerID, Name) and Orders(OrderID, CustomerID, OrderDate). Why is this preferable to copying customer name into every order?',
['It reduces redundant customer facts and update anomalies','It guarantees every query is faster','It eliminates the need for joins','It turns the database into a document store'],0,
'Normalization separates facts by entity so mutable customer attributes have one authoritative location.',
'Normalization may require joins; it is primarily about data integrity and redundancy, not a promise that every query becomes faster.');
add('r09','relational','SQL DML','A process must change Status from Pending to Shipped for existing order rows. Which SQL statement is appropriate?',
['UPDATE','ALTER TABLE','DROP TABLE','CREATE VIEW'],0,
'UPDATE modifies values in existing rows.',
'ALTER TABLE changes the schema definition, not the row values for the shipment status.');
add('r10','relational','SQL DML','A retention job must remove only rows whose ExpirationDate is older than the cutoff while preserving the table definition. Which statement fits?',
['DELETE with a predicate','DROP TABLE','ALTER TABLE DROP COLUMN','CREATE TABLE'],0,
'DELETE removes selected rows while leaving the table object and schema in place.',
'DROP TABLE removes the table object itself, including its definition, which is far broader than the requirement.');
add('r11','relational','Keys and integrity','A table has a natural business identifier that can change. The team introduces an immutable generated integer ID and keeps the business identifier unique. What is the generated ID acting as?',
['Surrogate key','Foreign key to itself by definition','Unstructured payload','Streaming checkpoint'],0,
'A surrogate key is an artificial stable identifier used instead of relying on a mutable natural/business key.',
'A foreign key represents a relationship to another key; being generated does not make a value a foreign key.');
add('r12','relational','Azure SQL service selection','A company has hundreds of small independent SaaS tenant databases with unpredictable but staggered utilization. Which Azure SQL Database capability can help share a pool of compute across databases?',
['Elastic pool','Azure Files share','Cosmos DB partition key','SQL Server Agent on each Azure SQL Database server'],0,
'Elastic pools let multiple Azure SQL databases share provisioned resources, which can suit databases with varying utilization patterns.',
'The requirement is still relational Azure SQL Database capacity management, not file sharing or non-relational partitioning.');
add('r13','relational','Relational workload fit','A banking ledger requires strong relationships among accounts, transactions, and customers, with multi-row transactional consistency. Which data model is the most natural starting point?',
['Relational','Blob object storage','Graph solely because customers connect to accounts','File share'],0,
'Relational databases are a natural fit for strongly structured entities, relationships, constraints, and transactional consistency.',
'Graphs excel at relationship traversal, but that does not automatically make them the best store for a transactional financial ledger.');
add('r14','relational','Database objects','A team needs reusable server-side logic that accepts parameters and performs several SQL statements as one callable unit. Which relational object best fits?',
['Stored procedure','Index','Foreign key','CSV file'],0,
'A stored procedure encapsulates callable SQL logic and can accept parameters.',
'An index is a data access structure and cannot serve as a callable unit of business/database logic.');

// NON-RELATIONAL DATA ON AZURE
add('n01','nonrel','Azure storage selection','Several Azure VMs must mount the same managed SMB share and use normal file-system semantics. Which service should be considered first?',
['Azure Blob Storage','Azure Files','Azure Table Storage','Azure Cosmos DB'],1,
'Azure Files provides managed file shares accessible through protocols such as SMB.',
'Blob Storage is object storage; applications usually access objects through blob semantics rather than mounting a standard shared SMB file system.');
add('n02','nonrel','Azure storage selection','A company wants inexpensive durable storage for images, video, backups, and raw log files accessed as objects rather than mounted files. Which service fits?',
['Azure Blob Storage','Azure Files only','Azure SQL Managed Instance','Azure Table Storage only'],0,
'Blob Storage is Azure object storage for large amounts of unstructured data such as media, backups, and logs.',
'Azure Files is appropriate when file-share semantics are required; that is not the requirement here.');
add('n03','nonrel','Azure storage selection','An application needs a simple schema-less key/attribute store inside an Azure Storage account and does not require Cosmos DB global distribution features. Which service fits?',
['Azure Table Storage','Azure Files','Azure SQL Database','Power BI'],0,
'Azure Table Storage is a simple NoSQL key/attribute store for large amounts of structured non-relational data.',
'Azure SQL Database is relational and imposes a relational schema/model rather than the requested key/attribute pattern.');
add('n04','nonrel','Cosmos DB use cases','A JSON application must serve users globally with very low latency and needs multi-region distribution. Which Azure database should be evaluated first?',
['Azure Cosmos DB','Azure Files','Azure Table Storage only','SQL Server on a single VM by default'],0,
'Azure Cosmos DB is designed for globally distributed NoSQL workloads with low-latency access patterns.',
'Table Storage is simpler and cheaper for some key-value scenarios but lacks the broader global database capabilities that drive this requirement.');
add('n05','nonrel','Cosmos DB APIs','A new Cosmos DB application is designed natively around JSON documents and Microsoft’s native query model. Which API is the default conceptual fit?',
['API for NoSQL','API for Apache Gremlin','API for Table solely because JSON is text','SMB API'],0,
'Cosmos DB for NoSQL is the native document-oriented API for JSON items and SQL-like queries over JSON.',
'Gremlin is for graph workloads; choosing it just because data contains relationships would change the data model and query paradigm.');
add('n06','nonrel','Cosmos DB APIs','A migration must preserve an application written to MongoDB drivers and document conventions with minimal data-access rewriting. Which Cosmos DB API should be evaluated?',
['API for MongoDB','API for Apache Gremlin','API for Table','Azure Files SMB'],0,
'Cosmos DB for MongoDB targets applications that use MongoDB-compatible protocols and tools.',
'The NoSQL API is native to Cosmos DB but would require changing a MongoDB-specific application data-access layer.');
add('n07','nonrel','Cosmos DB APIs','A workload represents vertices and edges and spends most of its time traversing relationships such as friends-of-friends. Which Cosmos DB API aligns with that model?',
['API for Apache Gremlin','API for NoSQL solely because all data can be JSON','API for Table','Azure Blob REST only'],0,
'Gremlin is a graph traversal language/API and fits vertex-and-edge workloads.',
'Document storage can encode relationships, but it does not provide graph traversal semantics as the primary model.');
add('n08','nonrel','Cosmos DB APIs','An existing application uses the Cassandra protocol and wide-column data access patterns. Which Cosmos DB API is intended for this compatibility scenario?',
['API for Apache Cassandra','API for Apache Gremlin','API for Table','Azure SQL Database'],0,
'Cosmos DB for Apache Cassandra supports Cassandra-compatible connectivity and wide-column patterns.',
'Gremlin is graph-oriented and solves a different access pattern.');
add('n09','nonrel','Cosmos DB APIs','A legacy Azure Table-style application needs a globally distributed database while retaining the Table API programming model. Which Cosmos DB API matches?',
['API for Table','API for MongoDB','API for Apache Gremlin','T-SQL API'],0,
'Cosmos DB for Table supports the table/key-value programming model with Cosmos DB capabilities.',
'Azure Table Storage itself may fit simpler workloads, but the scenario explicitly needs Cosmos-level global database capabilities.');
add('n10','nonrel','Partitioning','A Cosmos DB container grows rapidly. One customer ID receives most of the traffic and nearly all writes target that single logical partition. What design concern does this reveal?',
['A hot partition caused by poor partition-key distribution','A missing foreign key','A need for SMB','A Power BI relationship direction problem'],0,
'A partition key should distribute storage and request load appropriately. Highly skewed keys can concentrate traffic into a hot partition.',
'Relational foreign keys do not control Cosmos DB physical request distribution.');
add('n11','nonrel','Data models','A shopping-cart service retrieves the entire cart by CartID and usually replaces or reads the cart as one aggregate. Which non-relational model is a reasonable fit?',
['Document/key-value style store','Highly normalized relational design is mandatory','Graph traversal is mandatory','Mounted file share only'],0,
'When an aggregate is usually read and written as one unit by key, document or key-value patterns can be a natural fit.',
'Relational storage can work, but the access pattern does not require normalized joins to be the default choice.');
add('n12','nonrel','Blob access tiers','An archive is rarely accessed and retrieval delay is acceptable in exchange for lower storage cost. Which Blob Storage tier concept best aligns?',
['Archive/coldest access tier','Hot tier','Premium file share because data is cold','Transactional SQL tier'],0,
'Archive-oriented tiers trade retrieval speed and access cost for lower storage cost when data is rarely accessed.',
'Hot storage is optimized for frequent access and generally carries a higher storage cost than archive-style tiers.');
add('n13','nonrel','Object vs file storage','An application needs to address each item by URL/object name and never requires POSIX/SMB directory semantics. Which statement is strongest?',
['Blob/object storage is a natural fit','A mounted file share is required','A relational database is always required','The data must be graph data'],0,
'Object storage fits data addressed as objects through APIs/URLs without mounted file-system semantics.',
'File shares are useful specifically when applications need file-system protocol behavior.');
add('n14','nonrel','Schema flexibility','Telemetry devices send JSON where firmware versions add or omit fields over time. Why can a document model be attractive?',
['Documents can evolve with differing fields without requiring every item to have identical columns','It guarantees no data governance is needed','It converts all writes into analytical batches','It eliminates the need to choose a partition key'],0,
'Document models accommodate variable fields naturally, which can reduce friction when payload shapes evolve.',
'Schema flexibility does not remove governance, validation, indexing, or partition-design responsibilities.');

// ANALYTICS WORKLOADS ON AZURE
add('a01','analytics','Analytical stores','A company wants to retain raw CSV, JSON, images, logs, and Parquet cheaply before every downstream use is known. Which architecture is the closest fit?',
['Data lake','Normalized OLTP database only','SMB share as the enterprise analytical model','Single Power BI report file'],0,
'A data lake is designed to retain large volumes of raw and varied data for later processing and analysis.',
'A warehouse generally expects more curated structured data and defined analytical schemas.');
add('a02','analytics','Warehouse vs lake','Finance needs governed, curated, relational data optimized for repeatable SQL reporting across conformed business dimensions. Which store is the strongest conceptual fit?',
['Data warehouse','Raw landing zone only','Operational key-value cache','Image blob container only'],0,
'A data warehouse is optimized for curated structured analytical data, consistent business definitions, and repeatable reporting.',
'A lake can hold the data, but raw lake storage alone does not imply the governed relational reporting model described.');
add('a03','analytics','Lakehouse','A platform wants low-cost lake storage plus table structures and analytics capabilities that support both data engineering and BI workloads. Which architectural term best fits?',
['Lakehouse','OLTP ledger','File share','DNS zone'],0,
'A lakehouse combines characteristics of data lakes and data warehouses so teams can work from common lake-based data with table/analytics capabilities.',
'A traditional warehouse is analytics-focused but does not by itself describe the combination of lake storage and warehouse-like table capabilities.');
add('a04','analytics','Microsoft Fabric','An organization wants an integrated SaaS analytics platform spanning data engineering, warehousing, real-time analytics, data science, and Power BI experiences. Which service should it evaluate?',
['Microsoft Fabric','Azure Files','Azure Table Storage','SQL Server Agent'],0,
'Microsoft Fabric integrates multiple analytics workloads in a unified SaaS platform.',
'Databricks is powerful for data engineering and data science, but the scenario explicitly asks for the broad integrated Microsoft analytics/BI SaaS experience.');
add('a05','analytics','Azure Databricks','A team of data engineers and data scientists wants a collaborative Apache Spark-based environment for large-scale processing and machine learning workflows. Which Azure service is a strong fit?',
['Azure Databricks','Azure Files','Azure SQL Database solely because it supports SQL','Power BI dashboard only'],0,
'Azure Databricks provides a collaborative lakehouse/Spark environment for large-scale data engineering and data science.',
'Azure SQL Database is a relational PaaS database, not a Spark-based distributed engineering and data-science workspace.');
add('a06','analytics','Real-time analytics','Operations receives high-volume event streams and needs to ingest, query, visualize, and react to events with low latency. Which Microsoft Fabric capability aligns most directly?',
['Real-Time Intelligence','A nightly backup','Azure Files SMB','A static CSV export once per month'],0,
'Fabric Real-Time Intelligence is designed for event-driven and streaming scenarios that require low-latency analysis and action.',
'Batch-oriented methods may still feed analytics, but they do not satisfy the near-real-time event requirement.');
add('a07','analytics','Batch vs streaming','A pipeline calculates yesterday’s customer balances once every morning from complete source extracts. Which model is most appropriate?',
['Batch','Streaming','Graph traversal','Interactive OLTP transaction'],0,
'The workload is periodic, bounded, and does not require continuous low-latency processing, so batch is appropriate.',
'Streaming is valuable for continuous event processing but is unnecessary for one scheduled daily calculation.');
add('a08','analytics','Power BI modeling','A report needs SalesAmount summarized by Date, Product, and Region with consistent relationships among fact and dimension tables. What Power BI concept is central?',
['Semantic data model','Blob access tier','Cosmos DB API','SMB share permissions'],0,
'A Power BI semantic model defines tables, relationships, calculations, and business logic used by reports.',
'A visualization consumes the model; it does not replace the need to model relationships and measures correctly.');
add('a09','analytics','Power BI visualization','A manager wants to compare actual revenue against a single monthly target and see whether the target has been reached. Which visual concept is more appropriate than a detailed row table?',
['KPI/card/gauge-style summary','Raw transaction table only','Entity-relationship diagram','Blob container listing'],0,
'A concise KPI-oriented visual communicates status against a target more directly than a detailed table of transactions.',
'Tables are useful for detail, but they are not the clearest first choice for a single performance indicator versus a target.');
add('a10','analytics','Power BI visualization','An analyst must show how revenue changed month by month over two years. Which visual is the most natural starting point?',
['Line chart','Pie chart with 24 slices','Single card','Scatter plot with no time axis'],0,
'A line chart is well suited to showing trends over an ordered time axis.',
'A pie chart emphasizes part-to-whole composition at a point in time and becomes poor for a long time series.');
add('a11','analytics','Data ingestion','A company has multiple source systems and needs repeatable orchestration to copy and transform data into an analytics platform on a schedule. Which capability category is required?',
['Data pipeline/orchestration','Only a visualization theme','Only an index on the source database','Only an SMB mount'],0,
'Ingestion pipelines orchestrate movement and transformation across sources and destinations on schedules or triggers.',
'Indexes can improve database access but do not orchestrate end-to-end movement among multiple systems.');
add('a12','analytics','Fabric OneLake','Several Fabric workloads need to work from a common organization-wide logical data lake rather than copying separate datasets for each experience. Which Fabric concept is relevant?',
['OneLake','SQL Server tempdb','Azure Files drive letter','Cosmos DB API for Gremlin'],0,
'OneLake is Fabric’s unified logical data lake intended to support data across Fabric experiences.',
'Azure Files provides file shares but is not the unifying Fabric analytics data foundation described.');
add('a13','analytics','Analytical schema','A warehouse models Sales as a central fact table linked to Date, Product, Customer, and Store dimensions. What schema pattern is this closest to?',
['Star schema','Highly normalized OLTP-only schema','Graph edge list','Key-value cache'],0,
'A star schema organizes measures in a central fact table surrounded by descriptive dimensions for analytics.',
'OLTP normalization optimizes transactional integrity; analytical star schemas deliberately shape data for efficient business analysis.');
add('a14','analytics','Streaming concepts','A stream processor must remember where it last successfully processed an event sequence so it can resume after failure without blindly starting over. What concept is most relevant?',
['Checkpoint/state tracking','Foreign key normalization','Blob archive tier','DDL migration'],0,
'Stream processing systems use checkpoints or maintained processing state to recover and resume consistently after failures.',
'Foreign keys govern relational integrity and do not track progress through an event stream.');

const DATA={domains:DOMAINS,questions:Q,sprint:SPRINT};
