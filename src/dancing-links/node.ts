export class RootNode {
	protected _left?: RootNode | HeaderNode;
	protected _right?: RootNode | HeaderNode;

	public get left() {
		if (!this._left) {
			throw new Error("Root: Left is not set");
		}

		return this._left;
	}

	public set left(node: RootNode | HeaderNode) {
		this._left = node;
	}

	public get right() {
		if (!this._right) {
			throw new Error("Root: Right is not set");
		}

		return this._right;
	}

	public set right(node: RootNode | HeaderNode) {
		this._right = node;
	}
}

export class HeaderNode extends RootNode {
	protected _up?: HeaderNode | DataNode;
	protected _down?: HeaderNode | DataNode;
	size: number = 0;
	column: number;

	constructor(column: number) {
		super();
		this.column = column;
	}

	public get up() {
		if (!this._up) {
			throw new Error("Header: Up is not set");
		}

		return this._up;
	}

	public set up(node: HeaderNode | DataNode) {
		this._up = node;
	}

	public get down() {
		if (!this._down) {
			throw new Error("Header: Down is not set");
		}

		return this._down;
	}

	public set down(node: HeaderNode | DataNode) {
		this._down = node;
	}
}

export class DataNode extends HeaderNode {
	protected _left?: DataNode;
	protected _right?: DataNode;
	private _header?: HeaderNode;
	row: number;

	constructor(column: number, row: number) {
		super(column);
		this.row = row;
	}

	public get left() {
		if (!this._left) {
			throw new Error("Data: Left is not set");
		}

		return this._left;
	}

	public set left(node: DataNode) {
		this._left = node;
	}

	public get right() {
		if (!this._right) {
			throw new Error("Data: Right is not set");
		}

		return this._right;
	}

	public set right(node: DataNode) {
		this._right = node;
	}

	public get header() {
		if (!this._header) {
			throw new Error("Data: Header is not set");
		}

		return this._header;
	}

	public set header(header: HeaderNode) {
		this._header = header;
	}
}
