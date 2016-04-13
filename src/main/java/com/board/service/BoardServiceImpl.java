package com.board.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.board.dao.Board;
import com.board.dao.BoardDAO;
import com.board.dao.ListNum;

@Service
public class BoardServiceImpl implements BoardService{
	private static final Logger logger = LoggerFactory.getLogger(BoardService.class);

	@Resource 
    private BoardDAO boarddao;
	
	@Override
	public List<Board> getList(ListNum lnum) {
		return boarddao.getBoardList(lnum);
	}
	@Override
	public Board getBoardDetail(int boardId){
		return boarddao.getBoardDetail(boardId);
	}
	
	@Override
	public void insertBoard (Board board) {
		boarddao.insertBoard (board);
	}
	
	public void deleteBoard(Board board) {
		boarddao.deleteBoard (board);
	}
	
	
}
