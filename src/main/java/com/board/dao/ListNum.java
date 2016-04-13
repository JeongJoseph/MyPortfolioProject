package com.board.dao;

public class ListNum {
	int startNum;
	int endNum;
	public int getStartNum() {
		return startNum;
	}
	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}
	public int getEndNum() {
		return endNum;
	}
	public void setEndNum(int endNum) {
		this.endNum = endNum;
	}
	public ListNum() {
		super();
	}
	public ListNum(int startNum, int endNum) {
		super();
		this.startNum = startNum;
		this.endNum = endNum;
	}
	@Override
	public String toString() {
		return "BoardListNum [startNum=" + startNum + ", endNum=" + endNum + "]";
	}
	
}
