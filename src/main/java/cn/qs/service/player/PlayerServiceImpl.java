package cn.qs.service.player;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.qs.bean.Player;
import cn.qs.bean.PlayerExample;
import cn.qs.bean.PlayerExample.Criteria;
import cn.qs.mapper.PlayerMapper;
import cn.qs.mapper.player.MyPlayerMapper;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService{

	@Autowired
	private PlayerMapper playerMapper;
	@Autowired
	private MyPlayerMapper PlayerMapper;
	
	@Override
	public List<Player> findAllUser() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Player findUserByPlayerName(String playName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addPlayer(Player player) {
		playerMapper.insertSelective(player);
		
	}

	@Override
	public List<Player> getPlayers(Map condition) {

		PlayerExample playerExample = new PlayerExample();
		if (StringUtils.isNotBlank(MapUtils.getString(condition, "name"))) {
			Criteria createCriteria = playerExample.createCriteria();
			createCriteria.andNameLike("%" + MapUtils.getString(condition, "name") + "%");
		}
		List<Player> list = playerMapper.selectByExample(playerExample);
		return list;
	
	}

	@Override
	public void deletePlayer(String playerId) {
		playerMapper.deleteByPrimaryKey(playerId);
		
	}

	@Override
	public Player getPlayer(String playerId) {
		
		return playerMapper.selectByPrimaryKey(playerId);
	}

	@Override
	public void updatePlayer(Player player) {
		playerMapper.updateByPrimaryKeySelective(player);
		
	}

	@Override
	public List<Player> selectPlayerDetail(Map map) {
		
		return PlayerMapper.selectPlayersByMap(map);
	}
	
}
