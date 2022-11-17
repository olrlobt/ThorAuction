package com.goodee.finalproject.board.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class NoticeService implements NoticeMapper {

	@Autowired
	private NoticeMapper noticeMapper;
	
	@Override
	public List<NoticeVO> getNoticeList(NoticeVO noticeVO) throws Exception{ 
		
		return noticeMapper.getNoticeList(noticeVO);
	}

	@Override
	public int setNoticeAdd(NoticeVO noticeVO) throws Exception {
		
		return noticeMapper.setNoticeAdd(noticeVO);
	}

	@Override
	public NoticeVO getNoticeListDetail(NoticeVO noticeVO) throws Exception {
		// TODO Auto-generated method stub
		return noticeMapper.getNoticeListDetail(noticeVO);
	}

	@Override
	public int setNoticeUpdate(NoticeVO noticeVO) throws Exception {
		
		return noticeMapper.setNoticeUpdate(noticeVO);
	}

	@Override
	public int setNoticeDelete(NoticeVO noticeVO) throws Exception {
		// TODO Auto-generated method stub
		return noticeMapper.setNoticeDelete(noticeVO);
	}
}
