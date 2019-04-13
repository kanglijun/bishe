package cn.qs.mapper.player;

import java.util.List;
import java.util.Map;

import cn.qs.bean.Player;

public interface MyPlayerMapper {
	List<Player> selectPlayersByMap(Map map);
	Map<String,String> selectMaxDataFromPlayer();
}
